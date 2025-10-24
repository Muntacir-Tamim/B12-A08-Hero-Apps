import { toast } from "react-toastify";

export const loadInstallation = () => {
  try {
    const data = localStorage.getItem("Installation");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const updateList = (App) => {
  const Installation = loadInstallation();

  try {
    const isDublicate = Installation.some((p) => p.id === App.id);
    if (isDublicate) {
      return toast.success("Already added in wishlist");
    }
    const updatedInstallation = [...Installation, App];

    localStorage.setItem("Installation", JSON.stringify(updatedInstallation));
  } catch (err) {
    console.log(err);
  }
};

export const removeFromInstallation = (id) => {
  const Installation = loadInstallation();
  try {
    const updatedInstallation = Installation.filter((p) => p.id !== id);
    localStorage.setItem("Installation", JSON.stringify(updatedInstallation));
  } catch (err) {
    console.log(err);
  }
};
