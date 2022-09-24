import React from 'react'


function CategoryFilter({ curCat, setCurCat, categories }) {

  const handleSetCurCat = ({ 
    target: { textContent: catName } 
  }) => {
    setCurCat(catName)
  }

  return (
    <div className='categories'>
      <h5>Category filters</h5>
      {categories.map((ctg) => {
        const selected = ctg === curCat ? 'selected' : null
        return (
          <button key={ctg} className={selected} onClick={handleSetCurCat}>
            {ctg}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter