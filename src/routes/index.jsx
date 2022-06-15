import { LoginRoutes } from './login.routes';
import { AppRoutes } from './appEmpresa.routes';

const isSignedIn = false;

export function Routes() {
    return (
        isSignedIn ? (
            <AppRoutes />
          ) : (
            <LoginRoutes/>
          )
    );
}

export default Routes;
