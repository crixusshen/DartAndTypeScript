library cookie_service;

import 'civilisolates.dart' as civilisolates;

abstract class CookieService {
  String sendCookiesTo(address, customer);
}

class MyCookieService implements CookieService {
  @override
  String sendCookiesTo(address, customer) {
    return 'dfzq';
  }
}

main(args, client) {
  CookieService obj = new MyCookieService();
  civilisolates.serve(obj, client);
}