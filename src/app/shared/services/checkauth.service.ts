// import { tap } from "rxjs/add/operator";
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpResponse,
//   HttpErrorResponse
// } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { AuthService } from "./auth.service";
// import { LocalStoreService } from "./local-store.service";

// export class JwtInterceptor implements HttpInterceptor {
//   constructor(public auth: AuthService, public store: LocalStoreService) {}
//   redirect;
//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     return next.handle(request).pipe(
//       tap(
//         (event: HttpEvent<any>) => {
//           if (event instanceof HttpResponse) {
//             // do stuff with response if you want
//           }
//         },
//         (err: any) => {
//           if (err instanceof HttpErrorResponse) {
//             if (err.status === 401) {
//               this.store.clear();
//               this.redirect = "";
//               window.location = this.redirect;
//             }
//           }
//         }
//       )
//     );
//   }
// }
