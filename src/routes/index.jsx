import { LoginRoutes } from './login.routes';
import { AppEmpresaRoutes } from './appEmpresa.routes';
import { AppDesenvolvedorRoutes } from './appDesenvolvedor.routes';

const isSignedIn = true;

export function Routes() {
    return (
        isSignedIn ? (
            <AppEmpresaRoutes />
          ) : (
            <LoginRoutes/>
          )
    );
}

export default Routes;
