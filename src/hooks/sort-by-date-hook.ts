import { Feedback, FeedbackResponse } from "@redux/api/feedbackApi";



  export const useSortByDate = (arr: FeedbackResponse ): Feedback[]  => {
    if(typeof arr !=='undefined'){

        const sorted = [...arr];
        for (let i = 0; i < sorted.length - 1; i++) {
          for (let j = 0; j < sorted.length - 1 - i; j++) {
            if (new Date(sorted[j].createdAt) < (new Date(sorted[j + 1].createdAt)) ) {
              const temp = sorted[j + 1];
              sorted[j + 1] = sorted[j];
              sorted[j] = temp;
            }
          }
        }
        return sorted;
    }
    return arr

}
    
  