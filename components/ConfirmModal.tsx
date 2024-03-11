
import{
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
}from "@/components/ui/alert-dialog"

interface ConformModalprop {
    children:React.ReactNode;
    onconfirm:()=>void;
    disabled?:boolean;
    header:string;
    description?:string;
}

function ConfirmModal({
    children, onconfirm,disabled,header, description
}:ConformModalprop) {

    const handleConfirm =()=>{
        onconfirm();
    }

    return (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            {children}
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                {header}
              </AlertDialogTitle>
              <AlertDialogDescription>
                {description}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                disabled={disabled}
                onClick={handleConfirm}
              >
                Confirm
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    };

export default ConfirmModal