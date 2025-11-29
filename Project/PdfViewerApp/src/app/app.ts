import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  pdfSrc = 'assets/sample.pdf';

  // Toolbar toggles
  showSidebarButton = true;
  showFindButton = true;
  showPagingButtons = true;
  showZoomButtons = true;
  showPresentationModeButton = true;
  showOpenFileButton = true;
  showPrintButton = true;
  showDownloadButton = true;
  showSecondaryToolbarButton = true;
  showRotateButton = true;
  showHandToolButton = true;
  showTextSelectionButton = true;

  // Viewer State
  theme = 'dark';
  zoom = 'auto';
  rotation: 0 | 90 | 180 | 270 = 0;

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
  }

  rotate(angle: number) {
    const newRotation = (this.rotation + angle) % 360;
    this.rotation = (newRotation < 0 ? newRotation + 360 : newRotation) as 0 | 90 | 180 | 270;
  }
}
