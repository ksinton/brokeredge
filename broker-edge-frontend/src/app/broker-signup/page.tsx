// app/signup/page.tsx (or signup/basic/page.tsx depending on your route structure)

import { headers } from 'next/headers';
import BrokerSignup from '../components/broker-signup';

export default function BrokerSignupPage() {
    const host = headers().get('host') ?? 'default.com';

    return <BrokerSignup host={host} />;
}
