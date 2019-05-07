library drive_cookie_service;

import 'civilisolates.dart' as civilisolates;
import 'promise.dart';

main(List<String> args) {
  Promise cookieService = civilisolates.startServiceObject(new Uri(path: './cookie_service.dart'));
  // cookieService.sendCookiesTo(1, 2);
  print('end!!!');
}
