import { HeaderComponent } from '@/components/header.component';
import { ToastComponent } from '@/components/toast.component';
export abstract class BasePage {
  readonly header: HeaderComponent;
  readonly toast: ToastComponent;

  constructor() {
    this.header = new HeaderComponent();
    this.toast = new ToastComponent();
  }

  abstract navigate(...args: any[]): void;
}
