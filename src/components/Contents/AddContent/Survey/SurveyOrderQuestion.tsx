import { Box, Typography } from '@mui/material';
import { sortBy } from 'lodash';
import React, { useEffect, useMemo, useState } from 'react';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd';
import { reorderContentQuestions } from '../../../../services/QuestionService';
import { Question } from '../../../../types/questions';

const getItemStyle = (draggableStyle: any) => ({
  margin: '5px',
  padding: '5px',
  border: `2px solid #f3f3f3`,
  fontSize: `20px`,
  borderRadius: `5px`,

  ...draggableStyle
});

interface Props {
  contentId: number;
  questions?: Question[];
}

const SurveyOrderQuestion = (props: Props) => {
  const [todo, setTodo] = useState(props.questions);
  const onDragEnd = async (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    if (props.questions) {
      const items = Array.from(props.questions);
      const [newOrder] = items.splice(source.index, 1);
      items.splice(destination.index, 0, newOrder);

      const reOrderMapping: Record<number, number> = {};
      items.forEach((item, index) => {
        reOrderMapping[item.sequence] = index + 1;
      });
      const contents = await reorderContentQuestions(
        props.contentId,
        reOrderMapping
      );
      setTodo(contents);
    }
  };

  useEffect(() => {
    setTodo(props.questions);
  }, [props.questions]);

  const sortedQuestions = useMemo(() => {
    return sortBy(todo, 'sequence');
  }, [todo]);
  return (
    <>
      <Box>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="todo">
            {(provided) => (
              <div
                className="todo"
                {...provided.droppableProps}
                ref={provided.innerRef}>
                {sortedQuestions.map(({ sequence, text }, index) => {
                  return (
                    <Draggable
                      key={sequence}
                      draggableId={'' + sequence}
                      index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(provided.draggableProps.style)}>
                          <Typography>{text}</Typography>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Box>
    </>
  );
};

export default SurveyOrderQuestion;
