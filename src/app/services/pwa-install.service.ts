import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PwaInstallService {
  private deferredPrompt: any;
  private installed: boolean = false;

  constructor() {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      this.deferredPrompt = event;
      console.log('beforeinstallprompt event captured');
    });

    window.addEventListener('appinstalled', (event) => {
      console.log('PWA was installed');
      this.installed = true;
      this.deferredPrompt = null;
    });
  }

  public promptInstall(): void {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        this.deferredPrompt = null;
      });
    } else {
      console.log('No deferredPrompt available');
    }
  }

  public rejectInstall(): void {
    this.deferredPrompt = null;
    console.log('User dismissed the install prompt');
  }

  public canPrompt(): boolean {
    return this.deferredPrompt !== null && !this.installed;
  }
}
