import { ErrorMessage } from "@/protocols/errors";

export function appError(status:number, message: string):ErrorMessage{
    return {status, message}
}