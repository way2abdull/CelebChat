import { SessionSchema } from "../models/session";

export class Sessions {
    static async maintain_session(req: any, res: any, device: any, user: any, userSession: any) {
        try {

            if (user) {
                if (!userSession) {
                    const session_details = await SessionSchema.create({
                        user_id: user.id,
                        device_type: device,
                        isActive: true
                    });
                    const session = await session_details.save();
                    console.log("Session stored successfully");
                    console.log(session);
                }
                else if (userSession) {
                    if (!userSession.status) {
                        await SessionSchema.update({ where: { user_id: user.id } }, { where: { isActive: !userSession.isActive } });
                        console.log("Session Activate");
                    }
                }
            }
            else {
                res.status(404).json({ message: "User Not Found" });
                console.log("User not found");
            }
        }
        catch (err) {
            res.status(500).json({ message: "Server Error", err });
            console.log("Server Error")
        }
    }
}