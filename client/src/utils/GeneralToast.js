import { toaster } from "@/components/ui/toaster";

export const generalToast = ({data, clearAllProperties}) => {

    const statusCodesForWarning = [400, 404, 409];

    if (data.status === 200) {
        const toast  = toaster.create({
            title: data.data.message,
            type: "success",
            duration: 3000,
            meta: {
                bg: "#243647",
                p: "3 !important",
                iconColor: "#ADFF2F"
            }
        });

        setTimeout(() => {
            clearAllProperties()
        }, 1000);

        return toast;
    }


    if (data.status === 500) {
        const toast = toaster.create({
            title: data.message,
            duration: 3000,
            type: "error",
            meta: {
                bg: "#243647",
                p: "3 !important"
            }
        });

        return toast;
    }

    if (statusCodesForWarning.includes(data.status)) {
        console.log("sdfsdf")
        const toast = toaster.create({
            title: data.message,
            duration: 3000,
            type: "warning",
            meta: {
                bg: "#243647",
                p: "3 !important",
                iconColor: "#FFD580"
            }
        });

        return toast;
    }
}