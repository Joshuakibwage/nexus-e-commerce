import CategoryFilter from '@/components/CategoryFilter';
import Sorting from '@/components/Sorting';
import SearchBar from '@/components/SearchBar';
import ProductList from '@/components/ProductList';
import MobileFilterMenu from '@/components/MobileFilterMenu';

export default function Home() {
  return (
    <div>
      {/* Mobile Filter Menu */}
      <MobileFilterMenu />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar - Hidden on mobile */}
        <div className="hidden lg:block lg:col-span-1 space-y-6">
          <SearchBar />
          <CategoryFilter />
          <Sorting />
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <ProductList />
        </div>
      </div>
    </div>
  );
}