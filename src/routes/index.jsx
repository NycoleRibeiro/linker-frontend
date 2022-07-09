import { LoginRoutes } from './login.routes';
import { AppEmpresaRoutes } from './appEmpresa.routes';
import { AppDesenvolvedorRoutes } from './appDesenvolvedor.routes';

const isSignedIn = true;
const accountType = 'desenvolvedor';

export function Routes() {
    return (
        isSignedIn ? (
            // Se for empresa, redireciona para o <AppEmpresaRoutes>
            // Se for desenvolvedor, redireciona para o <AppDesenvolvedorRoutes>
            accountType === 'empresa' ? <AppEmpresaRoutes /> : <AppDesenvolvedorRoutes />
          ) : (
            <LoginRoutes/>
          )
    );
}

export default Routes;
