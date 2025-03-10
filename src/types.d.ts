
// Extend Window interface to include ConvertKit
interface Window {
  convertkit?: {
    openModal: (uid: string) => void;
  };
}
