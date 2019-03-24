import { Injectable } from '@angular/core';
import * as toastr from 'toastr';

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor() {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: 'toast-bottom-full-width',
      preventDuplicates: false,
      onclick: null,
      showDuration: '300',
      hideDuration: '10000',
      timeOut: '5000',
      extendedTimeOut: '1000',
      showEasing: 'swing',
      hideEasing: 'linear',
      showMethod: 'fadeIn',
      hideMethod: 'fadeOut'
    };
  }

  successMessage(data) {
    toastr['success'](this.formatText(data));
  }

  errorMessage(data) {
    toastr['error'](this.formatText(data));
  }

  warningMessage(data) {
    toastr['warning'](this.formatText(data));
  }

  infoMessage(data) {
    toastr['info'](this.formatText(data));
  }

  private formatText(obj) {
    if (obj === null) return null;
    if (typeof obj === 'object') {
      if (obj.name === 'HttpErrorResponse') return obj.message;
    }
    return obj;
  }
}
