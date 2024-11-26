import { TemplateRef } from "@angular/core";

export interface TabMenuItem {
  label: string;
  content: string | null;
  template?: TemplateRef<any>;
}
