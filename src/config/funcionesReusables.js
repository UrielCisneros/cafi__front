/* CONVERTIR IMAGENES PARA VISUALIZAR ANTD */
export function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            resolve((file.thumbUrl = e.target.result));
        };
        reader.onerror = (error) => reject(error);
    });
}