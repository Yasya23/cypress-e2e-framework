import { ToastComponent } from '@/components/toast.component';
export abstract class BasePage {
  readonly toast: ToastComponent;

  constructor() {
    this.toast = new ToastComponent();
  }

  abstract navigate(...args: any[]): void;
}
