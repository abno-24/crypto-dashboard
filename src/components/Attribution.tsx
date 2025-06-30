import Image from 'next/image';

export default function Attribution() {
  return (
    <div className="mt-10 border-t pt-8 flex flex-col items-center gap-4 text-gray-600 text-sm">
      <div className="flex gap-6 items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/logos/blockchain.png"
            alt="Blockchain.com Logo"
            width={24}
            height={24}
          />
          <span>Powered by Blockchain.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/logos/da.png"
            alt="Dune Analytics Logo"
            width={24}
            height={24}
          />
          <span>Powered by Dune Analytics</span>
        </div>
      </div>
    </div>
  );
}