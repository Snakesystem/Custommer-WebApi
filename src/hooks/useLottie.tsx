import { useState } from 'react';
import Lottie from 'lottie-react';

const useLottie = () => {
  const [animations, setAnimations] = useState<{ [key: string]: JSX.Element | null }>({});
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});

  const animasi = (name: string) => {
    if (!animations[name] && !loading[name]) {
      // Set status loading menjadi true sebelum animasi dimuat
      setLoading((prev) => ({ ...prev, [name]: true }));

      const fetchAnimation = async () => {
        try {
          // Menggunakan dynamic import untuk memuat file animasi
          const animationData = await import(`../assets/lotties/${name}.json`);
          // Simpan animasi ke state dan tandai loading selesai
          const animasiElement = (
            <Lottie 
              animationData={animationData.default}
              loop 
              autoplay 
              style={{ height: '100%', width: '100%' }} // Atur styling default
            />
          );
          setAnimations((prev) => ({ ...prev, [name]: animasiElement }));
        } catch (error) {
          console.error(`Error loading animation: ${name}`, error);
        } finally {
          // Set status loading menjadi false setelah animasi selesai dimuat
          setLoading((prev) => ({ ...prev, [name]: false }));
        }
      };

      fetchAnimation();
    }

    // Tampilkan loading jika animasi sedang dimuat
    if (loading[name]) {
      return <div className="spinner-border text-primary" style={{ width: '5rem', height: '5rem' }} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>; // Bisa ganti dengan spinner atau indikator loading lain
    }

    return animations[name] || null;
  };

  return { animasi };
};

export default useLottie;
