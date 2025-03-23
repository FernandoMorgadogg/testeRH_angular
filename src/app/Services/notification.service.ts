import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';  // Importing Material Snackbar

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) {}
  showNotification(message: string, action: string = 'Close') {
    // Displaying the toast notification
    this.snackBar.open(message, action, {
      duration: 3000,  // Notification will disappear after 3 seconds
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
