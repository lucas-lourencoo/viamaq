import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { Pagination } from './styles';

interface PageProps {
  text: string;
}

export function Paginator({ text }: PageProps) {
  return (
    <Pagination>
      <div className='text'>
        <Link href='/'>
          <a>
            <FaHome size={25} />
          </a>
        </Link>
        <span>|</span>
        <span>{text}</span>
      </div>
    </Pagination>
  );
}
