import { Injectable } from '@angular/core';

export enum LanguageEnum {
  DE = 'de',
  EN = 'en',
  IN = 'in'
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
private _currentLang = LanguageEnum.EN;

  constructor() { }

  get currentLang() {
    return this._currentLang;
  }

  set currentLang(lang: LanguageEnum) {
    this._currentLang = lang;
  }
}
