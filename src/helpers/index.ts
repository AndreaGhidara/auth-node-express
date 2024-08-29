import cryto from 'crypto';

const SECRET = 'ANDREW_REST_API';

export const random = () => cryto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string) => {
    return cryto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};

