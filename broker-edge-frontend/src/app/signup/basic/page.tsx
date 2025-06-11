// app/signup/page.tsx (or signup/basic/page.tsx depending on your route structure)

import { headers } from 'next/headers';
import Basic from '../../components/signup/Basic';

export default function SignupPage() {
    const host = headers().get('host') ?? 'default.com';

    return <Basic host={host} />;
}
