import { ResponsiveDialog } from "@/components/responsive-dialog";

import { MeetingForm } from "./meeting-form";
import { MeetingGetOne } from "../../types";


interface UpdateMeetingDIalogProps{
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialValues: MeetingGetOne;
}

export const UpdateMeetingDialog = ({ 
    open, 
    onOpenChange,
    initialValues,
}: UpdateMeetingDIalogProps) => {

    return (
        <ResponsiveDialog
        title="Edit Meeting"
        description="Edit the meeting details"
        open={open}
        onOpenChange={onOpenChange}
        >
            <MeetingForm
                onSucess={() => onOpenChange(false)}
                onCancel={() => onOpenChange(false)} 
                initialValues={initialValues}
            />
        </ResponsiveDialog>
    );
};