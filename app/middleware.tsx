import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import jwt, { JwtPayload} from "jsonwebtoken";

let secret: string = "hfuwb8ernier";


export async function middleware(request: NextRequest) {
  const token = request.cookies.get('authToken')?.value as string;
  let role = 'guest';

  if (token) {
    try {
      const decodedToken = jwt.verify(token, secret) as JwtPayload;
      const { role: decodedRole } = decodedToken;
      role = decodedRole;
    } catch (error) {
      // Handle token verification error
    }
  }

  // Rest of your middleware code...

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
