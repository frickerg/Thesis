## simple_story_without_checkpoint
* simple                       <!-- user utterance in _intent[entities] format -->
    - utter_default
    - utter_greet

## simple_story_with_only_start
> check_greet                   <!-- checkpoints at the start define entry points -->
* simple
    - slot{"nice_person": ""}
    - utter_default

## simple_story_with_only_end
* hello
    - utter_greet
    - slot{"name": "peter"}
    - slot{"nice_person": ""}
> check_greet                   <!-- checkpoint defining the end of this turn -->
