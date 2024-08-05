import { CryptoService } from "../crypto/crypto.service";

export class EncryptedLocalStorage {
  static async put(name, data) {
    try {
      const encryptedData = await CryptoService.encrypt(data);
      localStorage.setItem(name, encryptedData);
      return true;
    } catch (err) {
      return false;
    }
  }

  static async get(name) {
    try {
      const encryptedData = localStorage.getItem(name);
      if (encryptedData) {
        const decryptedData = await CryptoService.decrypt(encryptedData);
        return decryptedData;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  }
}