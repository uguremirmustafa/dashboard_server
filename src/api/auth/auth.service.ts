import db from '@/db';
import { User } from '@/lib/types';
import bcrypt from 'bcrypt';

interface Credientials {
  password: string;
  email: string;
}

export async function registerUser(userBody: User) {
  const { email, password } = userBody;
  const user = await getUser(email);

  if (user) {
    throw new Error('user already exists');
  } else {
    try {
      const hashedPw = await hashPassword(password);
      const newUser = await saveUser({ ...userBody, password: hashedPw });

      if (!newUser) {
        throw new Error('user creation failed yehu');
      } else {
        return newUser;
      }
    } catch (error) {
      throw new Error('user creation failed');
    }
  }
}

export async function getUsers() {
  const res = await db.user.findMany();
  return res;
}
export async function getUserByEmail(email: User['email']) {
  const result = await db.user.findMany({ where: { email } });
  if (result.length === 1) {
    return result[0];
  } else if (result.length > 1) {
    console.log('multiple users found by same email');
    return null;
  } else {
    console.log(`no user found for the email: ${email}`);
    return null;
  }
}
export async function getUser(email: User['email']) {
  try {
    return getUserByEmail(email);
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function saveUser(user: User) {
  try {
    const newUser = await db.user.create({ data: { ...user } });
    return newUser;
  } catch (error) {
    throw new Error('user creation failed: ' + user.email);
  }
}
export async function hashPassword(pw: string): Promise<string> {
  const hashedPw = await bcrypt.hash(pw, 10);
  if (hashedPw) {
    console.log('password hashing successful');
  } else {
    console.log('sth went wrong while hashing');
  }
  return hashedPw;
}
export async function validatePassword(password: string, hashedPassword: string) {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    console.log(error);
  }
}
