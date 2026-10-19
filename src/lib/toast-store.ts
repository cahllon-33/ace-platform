export type ToastKind = "success" | "info" | "error";
export type ToastItem = { id: number; kind: ToastKind; message: string };

type Listener = (items: ToastItem[]) => void;
let items: ToastItem[] = [];
let seq = 0;
const listeners = new Set<Listener>();
const emit = () => listeners.forEach((fn) => fn(items));

/** Push a toast. Auto-dismisses after `ms` (errors stay longer). Max 4 visible. */
export function toast(message: string, kind: ToastKind = "info", ms?: number): number {
  // Same message already visible (e.g. a remount): don't stack duplicates.
  const dup = items.find((t) => t.message === message && t.kind === kind);
  if (dup) return dup.id;
  const id = ++seq;
  items = [...items.slice(-3), { id, kind, message }];
  emit();
  const life = ms ?? (kind === "error" ? 8000 : 5000);
  if (typeof window !== "undefined") window.setTimeout(() => dismissToast(id), life);
  return id;
}

export function dismissToast(id: number) {
  const next = items.filter((t) => t.id !== id);
  if (next.length !== items.length) {
    items = next;
    emit();
  }
}

export function subscribeToasts(fn: Listener): () => void {
  listeners.add(fn);
  fn(items);
  return () => {
    listeners.delete(fn);
  };
}

export function resetToastsForTest() {
  items = [];
  seq = 0;
  listeners.clear();
}
