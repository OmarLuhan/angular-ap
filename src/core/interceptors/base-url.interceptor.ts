import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '@environments/environment';

const BASE_URL = environment.urlApi;

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  if (/^http(s)?:\/\//.test(req.url)) {
    return next(req);
  }

  const updated = req.clone({ url: BASE_URL + req.url });
  return next(updated);
};
