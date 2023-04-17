import React from 'react'
import FilterPillStyles from './FilterPills.module.css'

const FilterPills = ({selectFilter, selectedFilter}: any) => {
    
  return (
    <div className={FilterPillStyles.PillContainer}>
        <div>
            <button onClick={() => selectFilter('All')} className={selectedFilter === 'All' ? FilterPillStyles.PillSelected : FilterPillStyles.Pill}>
            All
            </button>
        </div>
        <div>
            <button onClick={() => selectFilter('Sandwiches')} className={selectedFilter === 'Sandwiches' ? FilterPillStyles.PillSelected : FilterPillStyles.Pill}>
            Sandwiches
            </button>
        </div>
        <div>
            <button onClick={() => selectFilter('Extras')} className={selectedFilter === 'Extras' ? FilterPillStyles.PillSelected : FilterPillStyles.Pill}>
            Extras
            </button>
        </div>
    </div>
  )
}

export default FilterPills