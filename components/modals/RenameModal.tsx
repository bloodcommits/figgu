"use client"

import{
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogClose,
    DialogFooter,
    DialogTitle
}from "@/components/ui/dialog"

import { useRenameModal } from "@/store/Usenamemodal"

function RenameModal() {
    const{isOpen , onClose , initialValues}= useRenameModal()
  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Edit board title
                </DialogTitle>
            </DialogHeader>
            <DialogDescription>
                Enter a new title with board
            </DialogDescription>
        </DialogContent>

    </Dialog>
  )
}

export default RenameModal