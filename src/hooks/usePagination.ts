import { useMemo } from 'react'

export const DOTS = '...'

export const usePagination = ({
  totalPage,
  pageSize,
  siblingCount = 1,
  currentPage,
}: any) => {
  const paginationRange = useMemo(() => {
    console.log({
      totalPage,
      pageSize,
      siblingCount,
      currentPage,
    })
    const totalPageCount = totalPage
    // Pages count is deter  mined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5
    /*
        Case 1:
        If the number of pages is less than the page numbers we want to show in our
        paginationComponent, we return the range [1..totalPageCount]
        */
    //
    if (totalPageNumbers >= totalPageCount) {
      console.log('case 1')
      return range(1, totalPageCount)
    }

    /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
        */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    console.log(
      currentPage,
      totalPageCount,
      Math.min(currentPage + siblingCount, totalPageCount),
    )

    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    )
    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    /*
    	Case 2: No left dots to show, but rights dots to be shown
     */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      console.log('case 2')
      let leftItemCount = 3 + 2 * siblingCount
      let leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    /*
    	Case 3: No right dots to show, but left dots to be shown
    */
    if (shouldShowLeftDots && !shouldShowRightDots) {
      console.log('case 3')
      let rightItemCount = 3 + 2 * siblingCount
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount,
      )
      return [firstPageIndex, DOTS, ...rightRange]
    }
    /*
          Case 4: Both left and right dots to be shown
          */
    if (shouldShowLeftDots && shouldShowRightDots) {
      console.log('case 4')
      let middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [totalPage, pageSize, siblingCount, currentPage])
  return paginationRange
}

const range = (start: number, end: number) => {
  let length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}
