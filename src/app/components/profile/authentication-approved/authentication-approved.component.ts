import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/account.service';
import { AuthenticationService } from '../../../services/authentication.service';


@Component({
  selector: 'app-authentication-approved',
  templateUrl: './authentication-approved.component.html',
  styleUrls: ['./authentication-approved.component.css']
})
export class AuthenticationApprovedComponent {

  constructor(private authenticationService: AuthenticationService, private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
    // STEP 3: Create Session ID
    let token = localStorage.getItem('REQUEST_TOKEN');
    // STEP 4: Guardamos el Session ID y solicitamos la información del usuario
    this.authenticationService.createSession(token!).subscribe(resp => {
      localStorage.setItem('SESSION_ID', resp.session_id);
      localStorage.setItem('SUCCESS', resp.success.toString());
      this.router.navigate([`/page-profile`]);
    });
  }
}
