import CryptoJS from "crypto-js";

export class CryptoService {
  static async decrypt(data) {
    try {
      const bytes = CryptoJS.AES.decrypt(data, `TEMP_CRYPTO_PASSWORD`);
      const originalText = bytes.toString(CryptoJS.enc.Utf8);
      const localTokenJson = await JSON.parse(originalText);
      return localTokenJson;
    } catch (err) {
      return String(err.message);
    }
  }

  static async encrypt(data) {
    try {
      const response = CryptoJS.AES.encrypt(
        CryptoJS.enc.Utf8.parse(JSON.stringify(data)),
        `TEMP_CRYPTO_PASSWORD`
      ).toString();
      return response;
    } catch (err) {
      return String(err.message);
    }
  }
}
