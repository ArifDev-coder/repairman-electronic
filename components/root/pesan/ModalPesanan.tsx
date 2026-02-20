import Link from "next/link";

interface ModalPesananProps {
    urlwa: string;
}

const ModalPesanan: React.FC<ModalPesananProps> = ({urlwa}) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      {/* Container Modal */}
      <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl transform transition-all scale-100">
        <div className="text-center">
          {/* Icon Centang */}
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="text-lg font-bold text-brand-navy mb-2">Pesanan Terkirim!</h3>
          {/* <p className="text-sm text-gray-500 mb-6">
            Tim teknisi kami akan segera menghubungi nomor WhatsApp Anda dalam waktu 15-30 menit.
          </p> */}

          <button
            className="w-full bg-brand-navy text-white py-2.5 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
          >
            <Link href={urlwa}>Lanjut ke Whatsapp</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPesanan;