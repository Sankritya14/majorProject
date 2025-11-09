import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AgentForm } from "./agent-form";
import { AgentGetOne } from "../../types";

interface UpdateAgentDIalogProps{
    open: boolean,
    onOpenChange: (open: boolean) => void;
    initialValues: AgentGetOne;
}

export const UpdateAgentDialog = ({ 
    open, 
    onOpenChange,
    initialValues
}: UpdateAgentDIalogProps) => {
    return (
        <ResponsiveDialog
        title="Edit Agent"
        description="Edit the a agent detailes"
        open={open}
        onOpenChange={onOpenChange}
        >
            <AgentForm
            onSucess={() => onOpenChange(false)}
            onCancel={() => onOpenChange(false)} 
            initialValues={initialValues}
            />
        </ResponsiveDialog>
    );
};