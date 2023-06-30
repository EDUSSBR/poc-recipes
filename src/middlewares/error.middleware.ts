import { ErrorMessage } from "@/protocols/errors"
import { NextFunction, Request, Response } from "express"

export function errorMiddleware(error: ErrorMessage, req: Request, res: Response, next: NextFunction) {
    if (error.status) {
        return res.status(error.status).send({ message: error.message })
    }
    return res.sendStatus(500)
}