import { headers } from 'next/headers';
import Categorization from '../../components/signup/Categorization';

export default function SignupCategorization(): JSX.Element {
    const host = headers().get('host') ?? 'default.com';

    return <Categorization host={host} />;
}