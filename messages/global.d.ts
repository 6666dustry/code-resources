type Messages = typeof import('./en.json');
declare interface IntlMessages extends Messages {
  HTML: HTMLMessages;
  CSS: CSSMessages;
  JavaScript: JavaScriptMessages;
  Other: OtherMessages;
}
