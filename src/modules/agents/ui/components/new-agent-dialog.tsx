import { ResponsiveDialog } from "@/components/responsive-dialog";
import { AgentForm } from "./agent-form";

interface NewAgentDIalogProps{
    open: boolean,
    onOpenChange: (open: boolean) => void;
}

export const NewAgentDialog = ({ 
    open, 
    onOpenChange
}: NewAgentDIalogProps) => {
    return (
        <ResponsiveDialog
        title="New Agent"
        description="Create a new agent"
        open={open}
        onOpenChange={onOpenChange}
        >
            <AgentForm
            onSucess={() => onOpenChange(false)}
            onCancel={() => onOpenChange(false)} 
            />
        </ResponsiveDialog>
    );
};