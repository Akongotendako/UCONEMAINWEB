import { toast } from "react-toastify";

const showToast = (status, data) => {

  const statusCodeForWarningList = [400, 404];

    if (status === 200) {
      return toast.success(data.message, {
        style: {
          backgroundColor: "#243647",
          color: "#FFF"
        },
      });
    }

    if (statusCodeForWarningList.includes(status)) {
        return toast.warn(data.message, {
          style: {
            backgroundColor: "#243647",
          color: "#FFF"
          },
        });
      }

    return toast.error(data, {
        style: {
          backgroundColor: "#243647",
          color: "#FFF"
        },
      });
  };
export default showToast;
