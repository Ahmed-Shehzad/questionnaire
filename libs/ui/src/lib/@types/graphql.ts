import { gql } from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateAnswer = {
  __typename?: 'AggregateAnswer';
  _avg?: Maybe<AnswerAvgAggregate>;
  _count?: Maybe<AnswerCountAggregate>;
  _max?: Maybe<AnswerMaxAggregate>;
  _min?: Maybe<AnswerMinAggregate>;
  _sum?: Maybe<AnswerSumAggregate>;
};

export type AggregatePage = {
  __typename?: 'AggregatePage';
  _avg?: Maybe<PageAvgAggregate>;
  _count?: Maybe<PageCountAggregate>;
  _max?: Maybe<PageMaxAggregate>;
  _min?: Maybe<PageMinAggregate>;
  _sum?: Maybe<PageSumAggregate>;
};

export type AggregateQuestion = {
  __typename?: 'AggregateQuestion';
  _avg?: Maybe<QuestionAvgAggregate>;
  _count?: Maybe<QuestionCountAggregate>;
  _max?: Maybe<QuestionMaxAggregate>;
  _min?: Maybe<QuestionMinAggregate>;
  _sum?: Maybe<QuestionSumAggregate>;
};

export type AggregateQuestionnaire = {
  __typename?: 'AggregateQuestionnaire';
  _avg?: Maybe<QuestionnaireAvgAggregate>;
  _count?: Maybe<QuestionnaireCountAggregate>;
  _max?: Maybe<QuestionnaireMaxAggregate>;
  _min?: Maybe<QuestionnaireMinAggregate>;
  _sum?: Maybe<QuestionnaireSumAggregate>;
};

export type Answer = {
  __typename?: 'Answer';
  answers: Array<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  questionId: Scalars['Int']['output'];
};

export type AnswerAvgAggregate = {
  __typename?: 'AnswerAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  questionId?: Maybe<Scalars['Float']['output']>;
};

export type AnswerAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
};

export type AnswerCountAggregate = {
  __typename?: 'AnswerCountAggregate';
  _all: Scalars['Int']['output'];
  answers: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  questionId: Scalars['Int']['output'];
};

export type AnswerCountOrderByAggregateInput = {
  answers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
};

export type AnswerCreateInput = {
  Question: QuestionCreateNestedOneWithoutAnswerInput;
  answers?: InputMaybe<AnswerCreateanswersInput>;
};

export type AnswerCreateManyInput = {
  answers?: InputMaybe<AnswerCreateanswersInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  questionId: Scalars['Int']['input'];
};

export type AnswerCreateNestedOneWithoutQuestionInput = {
  connect?: InputMaybe<AnswerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AnswerCreateOrConnectWithoutQuestionInput>;
  create?: InputMaybe<AnswerCreateWithoutQuestionInput>;
};

export type AnswerCreateOrConnectWithoutQuestionInput = {
  create: AnswerCreateWithoutQuestionInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerCreateWithoutQuestionInput = {
  answers?: InputMaybe<AnswerCreateanswersInput>;
};

export type AnswerCreateanswersInput = {
  set: Array<Scalars['String']['input']>;
};

export type AnswerGroupBy = {
  __typename?: 'AnswerGroupBy';
  _avg?: Maybe<AnswerAvgAggregate>;
  _count?: Maybe<AnswerCountAggregate>;
  _max?: Maybe<AnswerMaxAggregate>;
  _min?: Maybe<AnswerMinAggregate>;
  _sum?: Maybe<AnswerSumAggregate>;
  answers?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['Int']['output'];
  questionId: Scalars['Int']['output'];
};

export type AnswerMaxAggregate = {
  __typename?: 'AnswerMaxAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  questionId?: Maybe<Scalars['Int']['output']>;
};

export type AnswerMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
};

export type AnswerMinAggregate = {
  __typename?: 'AnswerMinAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  questionId?: Maybe<Scalars['Int']['output']>;
};

export type AnswerMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
};

export type AnswerOrderByWithAggregationInput = {
  _avg?: InputMaybe<AnswerAvgOrderByAggregateInput>;
  _count?: InputMaybe<AnswerCountOrderByAggregateInput>;
  _max?: InputMaybe<AnswerMaxOrderByAggregateInput>;
  _min?: InputMaybe<AnswerMinOrderByAggregateInput>;
  _sum?: InputMaybe<AnswerSumOrderByAggregateInput>;
  answers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
};

export type AnswerOrderByWithRelationInput = {
  Question?: InputMaybe<QuestionOrderByWithRelationInput>;
  answers?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
};

export type AnswerRelationFilter = {
  is?: InputMaybe<AnswerWhereInput>;
  isNot?: InputMaybe<AnswerWhereInput>;
};

export enum AnswerScalarFieldEnum {
  Answers = 'answers',
  Id = 'id',
  QuestionId = 'questionId'
}

export type AnswerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AnswerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AnswerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AnswerScalarWhereWithAggregatesInput>>;
  answers?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  questionId?: InputMaybe<IntWithAggregatesFilter>;
};

export type AnswerSumAggregate = {
  __typename?: 'AnswerSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  questionId?: Maybe<Scalars['Int']['output']>;
};

export type AnswerSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
};

export type AnswerUpdateInput = {
  Question?: InputMaybe<QuestionUpdateOneRequiredWithoutAnswerNestedInput>;
  answers?: InputMaybe<AnswerUpdateanswersInput>;
};

export type AnswerUpdateManyMutationInput = {
  answers?: InputMaybe<AnswerUpdateanswersInput>;
};

export type AnswerUpdateOneWithoutQuestionNestedInput = {
  connect?: InputMaybe<AnswerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AnswerCreateOrConnectWithoutQuestionInput>;
  create?: InputMaybe<AnswerCreateWithoutQuestionInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<AnswerUpdateWithoutQuestionInput>;
  upsert?: InputMaybe<AnswerUpsertWithoutQuestionInput>;
};

export type AnswerUpdateWithoutQuestionInput = {
  answers?: InputMaybe<AnswerUpdateanswersInput>;
};

export type AnswerUpdateanswersInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AnswerUpsertWithoutQuestionInput = {
  create: AnswerCreateWithoutQuestionInput;
  update: AnswerUpdateWithoutQuestionInput;
};

export type AnswerWhereInput = {
  AND?: InputMaybe<Array<AnswerWhereInput>>;
  NOT?: InputMaybe<Array<AnswerWhereInput>>;
  OR?: InputMaybe<Array<AnswerWhereInput>>;
  Question?: InputMaybe<QuestionRelationFilter>;
  answers?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<IntFilter>;
  questionId?: InputMaybe<IntFilter>;
};

export type AnswerWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  questionId?: InputMaybe<Scalars['Int']['input']>;
};

export type EnumQuestionTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<QuestionType>;
};

export type EnumQuestionTypeFilter = {
  equals?: InputMaybe<QuestionType>;
  in?: InputMaybe<Array<QuestionType>>;
  not?: InputMaybe<NestedEnumQuestionTypeFilter>;
  notIn?: InputMaybe<Array<QuestionType>>;
};

export type EnumQuestionTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumQuestionTypeFilter>;
  _min?: InputMaybe<NestedEnumQuestionTypeFilter>;
  equals?: InputMaybe<QuestionType>;
  in?: InputMaybe<Array<QuestionType>>;
  not?: InputMaybe<NestedEnumQuestionTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<QuestionType>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnswer?: Maybe<Answer>;
  createManyAnswer?: Maybe<AffectedRowsOutput>;
  createManyPage?: Maybe<AffectedRowsOutput>;
  createManyQuestion?: Maybe<AffectedRowsOutput>;
  createManyQuestionnaire?: Maybe<AffectedRowsOutput>;
  createPage?: Maybe<Page>;
  createQuestion?: Maybe<Question>;
  createQuestionnaire?: Maybe<Questionnaire>;
  deleteAnswer?: Maybe<Answer>;
  deleteManyAnswer?: Maybe<AffectedRowsOutput>;
  deleteManyPage?: Maybe<AffectedRowsOutput>;
  deleteManyQuestion?: Maybe<AffectedRowsOutput>;
  deleteManyQuestionnaire?: Maybe<AffectedRowsOutput>;
  deletePage?: Maybe<Page>;
  deleteQuestion?: Maybe<Question>;
  deleteQuestionnaire?: Maybe<Questionnaire>;
  updateAnswer?: Maybe<Answer>;
  updateManyAnswer?: Maybe<AffectedRowsOutput>;
  updateManyPage?: Maybe<AffectedRowsOutput>;
  updateManyQuestion?: Maybe<AffectedRowsOutput>;
  updateManyQuestionnaire?: Maybe<AffectedRowsOutput>;
  updatePage?: Maybe<Page>;
  updateQuestion?: Maybe<Question>;
  updateQuestionnaire?: Maybe<Questionnaire>;
  upsertAnswer?: Maybe<Answer>;
  upsertPage?: Maybe<Page>;
  upsertQuestion?: Maybe<Question>;
  upsertQuestionnaire?: Maybe<Questionnaire>;
};


export type MutationCreateAnswerArgs = {
  data: AnswerCreateInput;
};


export type MutationCreateManyAnswerArgs = {
  data: Array<AnswerCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPageArgs = {
  data: Array<PageCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyQuestionArgs = {
  data: Array<QuestionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyQuestionnaireArgs = {
  data: Array<QuestionnaireCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreateQuestionArgs = {
  data: QuestionCreateInput;
};


export type MutationCreateQuestionnaireArgs = {
  data: QuestionnaireCreateInput;
};


export type MutationDeleteAnswerArgs = {
  where: AnswerWhereUniqueInput;
};


export type MutationDeleteManyAnswerArgs = {
  where?: InputMaybe<AnswerWhereInput>;
};


export type MutationDeleteManyPageArgs = {
  where?: InputMaybe<PageWhereInput>;
};


export type MutationDeleteManyQuestionArgs = {
  where?: InputMaybe<QuestionWhereInput>;
};


export type MutationDeleteManyQuestionnaireArgs = {
  where?: InputMaybe<QuestionnaireWhereInput>;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeleteQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type MutationDeleteQuestionnaireArgs = {
  where: QuestionnaireWhereUniqueInput;
};


export type MutationUpdateAnswerArgs = {
  data: AnswerUpdateInput;
  where: AnswerWhereUniqueInput;
};


export type MutationUpdateManyAnswerArgs = {
  data: AnswerUpdateManyMutationInput;
  where?: InputMaybe<AnswerWhereInput>;
};


export type MutationUpdateManyPageArgs = {
  data: PageUpdateManyMutationInput;
  where?: InputMaybe<PageWhereInput>;
};


export type MutationUpdateManyQuestionArgs = {
  data: QuestionUpdateManyMutationInput;
  where?: InputMaybe<QuestionWhereInput>;
};


export type MutationUpdateManyQuestionnaireArgs = {
  data: QuestionnaireUpdateManyMutationInput;
  where?: InputMaybe<QuestionnaireWhereInput>;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdateQuestionArgs = {
  data: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};


export type MutationUpdateQuestionnaireArgs = {
  data: QuestionnaireUpdateInput;
  where: QuestionnaireWhereUniqueInput;
};


export type MutationUpsertAnswerArgs = {
  create: AnswerCreateInput;
  update: AnswerUpdateInput;
  where: AnswerWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  create: PageCreateInput;
  update: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertQuestionArgs = {
  create: QuestionCreateInput;
  update: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};


export type MutationUpsertQuestionnaireArgs = {
  create: QuestionnaireCreateInput;
  update: QuestionnaireUpdateInput;
  where: QuestionnaireWhereUniqueInput;
};

export type NestedEnumQuestionTypeFilter = {
  equals?: InputMaybe<QuestionType>;
  in?: InputMaybe<Array<QuestionType>>;
  not?: InputMaybe<NestedEnumQuestionTypeFilter>;
  notIn?: InputMaybe<Array<QuestionType>>;
};

export type NestedEnumQuestionTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumQuestionTypeFilter>;
  _min?: InputMaybe<NestedEnumQuestionTypeFilter>;
  equals?: InputMaybe<QuestionType>;
  in?: InputMaybe<Array<QuestionType>>;
  not?: InputMaybe<NestedEnumQuestionTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<QuestionType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type Page = {
  __typename?: 'Page';
  _count?: Maybe<PageCount>;
  id: Scalars['Int']['output'];
  predecessorId?: Maybe<Scalars['Int']['output']>;
  questionnaireId: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type PageAvgAggregate = {
  __typename?: 'PageAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  predecessorId?: Maybe<Scalars['Float']['output']>;
  questionnaireId?: Maybe<Scalars['Float']['output']>;
};

export type PageAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  predecessorId?: InputMaybe<SortOrder>;
  questionnaireId?: InputMaybe<SortOrder>;
};

export type PageCount = {
  __typename?: 'PageCount';
  questions: Scalars['Int']['output'];
};

export type PageCountAggregate = {
  __typename?: 'PageCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  predecessorId: Scalars['Int']['output'];
  questionnaireId: Scalars['Int']['output'];
  title: Scalars['Int']['output'];
};

export type PageCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  predecessorId?: InputMaybe<SortOrder>;
  questionnaireId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PageCreateInput = {
  predecessor?: InputMaybe<PageCreateNestedOneWithoutSuccessorInput>;
  questionnaire: QuestionnaireCreateNestedOneWithoutPagesInput;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutPageInput>;
  successor?: InputMaybe<PageCreateNestedOneWithoutPredecessorInput>;
  title: Scalars['String']['input'];
};

export type PageCreateManyInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  predecessorId?: InputMaybe<Scalars['Int']['input']>;
  questionnaireId: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type PageCreateManyQuestionnaireInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  predecessorId?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};

export type PageCreateManyQuestionnaireInputEnvelope = {
  data: Array<PageCreateManyQuestionnaireInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageCreateNestedManyWithoutQuestionnaireInput = {
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PageCreateOrConnectWithoutQuestionnaireInput>>;
  create?: InputMaybe<Array<PageCreateWithoutQuestionnaireInput>>;
  createMany?: InputMaybe<PageCreateManyQuestionnaireInputEnvelope>;
};

export type PageCreateNestedOneWithoutPredecessorInput = {
  connect?: InputMaybe<PageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PageCreateOrConnectWithoutPredecessorInput>;
  create?: InputMaybe<PageCreateWithoutPredecessorInput>;
};

export type PageCreateNestedOneWithoutQuestionsInput = {
  connect?: InputMaybe<PageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PageCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<PageCreateWithoutQuestionsInput>;
};

export type PageCreateNestedOneWithoutSuccessorInput = {
  connect?: InputMaybe<PageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PageCreateOrConnectWithoutSuccessorInput>;
  create?: InputMaybe<PageCreateWithoutSuccessorInput>;
};

export type PageCreateOrConnectWithoutPredecessorInput = {
  create: PageCreateWithoutPredecessorInput;
  where: PageWhereUniqueInput;
};

export type PageCreateOrConnectWithoutQuestionnaireInput = {
  create: PageCreateWithoutQuestionnaireInput;
  where: PageWhereUniqueInput;
};

export type PageCreateOrConnectWithoutQuestionsInput = {
  create: PageCreateWithoutQuestionsInput;
  where: PageWhereUniqueInput;
};

export type PageCreateOrConnectWithoutSuccessorInput = {
  create: PageCreateWithoutSuccessorInput;
  where: PageWhereUniqueInput;
};

export type PageCreateWithoutPredecessorInput = {
  questionnaire: QuestionnaireCreateNestedOneWithoutPagesInput;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutPageInput>;
  successor?: InputMaybe<PageCreateNestedOneWithoutPredecessorInput>;
  title: Scalars['String']['input'];
};

export type PageCreateWithoutQuestionnaireInput = {
  predecessor?: InputMaybe<PageCreateNestedOneWithoutSuccessorInput>;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutPageInput>;
  successor?: InputMaybe<PageCreateNestedOneWithoutPredecessorInput>;
  title: Scalars['String']['input'];
};

export type PageCreateWithoutQuestionsInput = {
  predecessor?: InputMaybe<PageCreateNestedOneWithoutSuccessorInput>;
  questionnaire: QuestionnaireCreateNestedOneWithoutPagesInput;
  successor?: InputMaybe<PageCreateNestedOneWithoutPredecessorInput>;
  title: Scalars['String']['input'];
};

export type PageCreateWithoutSuccessorInput = {
  predecessor?: InputMaybe<PageCreateNestedOneWithoutSuccessorInput>;
  questionnaire: QuestionnaireCreateNestedOneWithoutPagesInput;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutPageInput>;
  title: Scalars['String']['input'];
};

export type PageGroupBy = {
  __typename?: 'PageGroupBy';
  _avg?: Maybe<PageAvgAggregate>;
  _count?: Maybe<PageCountAggregate>;
  _max?: Maybe<PageMaxAggregate>;
  _min?: Maybe<PageMinAggregate>;
  _sum?: Maybe<PageSumAggregate>;
  id: Scalars['Int']['output'];
  predecessorId?: Maybe<Scalars['Int']['output']>;
  questionnaireId: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type PageListRelationFilter = {
  every?: InputMaybe<PageWhereInput>;
  none?: InputMaybe<PageWhereInput>;
  some?: InputMaybe<PageWhereInput>;
};

export type PageMaxAggregate = {
  __typename?: 'PageMaxAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  predecessorId?: Maybe<Scalars['Int']['output']>;
  questionnaireId?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PageMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  predecessorId?: InputMaybe<SortOrder>;
  questionnaireId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PageMinAggregate = {
  __typename?: 'PageMinAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  predecessorId?: Maybe<Scalars['Int']['output']>;
  questionnaireId?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PageMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  predecessorId?: InputMaybe<SortOrder>;
  questionnaireId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PageOrderByWithAggregationInput = {
  _avg?: InputMaybe<PageAvgOrderByAggregateInput>;
  _count?: InputMaybe<PageCountOrderByAggregateInput>;
  _max?: InputMaybe<PageMaxOrderByAggregateInput>;
  _min?: InputMaybe<PageMinOrderByAggregateInput>;
  _sum?: InputMaybe<PageSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  predecessorId?: InputMaybe<SortOrder>;
  questionnaireId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type PageOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  predecessor?: InputMaybe<PageOrderByWithRelationInput>;
  predecessorId?: InputMaybe<SortOrder>;
  questionnaire?: InputMaybe<QuestionnaireOrderByWithRelationInput>;
  questionnaireId?: InputMaybe<SortOrder>;
  questions?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  successor?: InputMaybe<PageOrderByWithRelationInput>;
  title?: InputMaybe<SortOrder>;
};

export type PageRelationFilter = {
  is?: InputMaybe<PageWhereInput>;
  isNot?: InputMaybe<PageWhereInput>;
};

export enum PageScalarFieldEnum {
  Id = 'id',
  PredecessorId = 'predecessorId',
  QuestionnaireId = 'questionnaireId',
  Title = 'title'
}

export type PageScalarWhereInput = {
  AND?: InputMaybe<Array<PageScalarWhereInput>>;
  NOT?: InputMaybe<Array<PageScalarWhereInput>>;
  OR?: InputMaybe<Array<PageScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  predecessorId?: InputMaybe<IntNullableFilter>;
  questionnaireId?: InputMaybe<IntFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PageScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PageScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PageScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  predecessorId?: InputMaybe<IntNullableWithAggregatesFilter>;
  questionnaireId?: InputMaybe<IntWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
};

export type PageSumAggregate = {
  __typename?: 'PageSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  predecessorId?: Maybe<Scalars['Int']['output']>;
  questionnaireId?: Maybe<Scalars['Int']['output']>;
};

export type PageSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  predecessorId?: InputMaybe<SortOrder>;
  questionnaireId?: InputMaybe<SortOrder>;
};

export type PageUpdateInput = {
  predecessor?: InputMaybe<PageUpdateOneWithoutSuccessorNestedInput>;
  questionnaire?: InputMaybe<QuestionnaireUpdateOneRequiredWithoutPagesNestedInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutPageNestedInput>;
  successor?: InputMaybe<PageUpdateOneWithoutPredecessorNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PageUpdateManyMutationInput = {
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PageUpdateManyWithWhereWithoutQuestionnaireInput = {
  data: PageUpdateManyMutationInput;
  where: PageScalarWhereInput;
};

export type PageUpdateManyWithoutQuestionnaireNestedInput = {
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PageCreateOrConnectWithoutQuestionnaireInput>>;
  create?: InputMaybe<Array<PageCreateWithoutQuestionnaireInput>>;
  createMany?: InputMaybe<PageCreateManyQuestionnaireInputEnvelope>;
  delete?: InputMaybe<Array<PageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
  set?: InputMaybe<Array<PageWhereUniqueInput>>;
  update?: InputMaybe<Array<PageUpdateWithWhereUniqueWithoutQuestionnaireInput>>;
  updateMany?: InputMaybe<Array<PageUpdateManyWithWhereWithoutQuestionnaireInput>>;
  upsert?: InputMaybe<Array<PageUpsertWithWhereUniqueWithoutQuestionnaireInput>>;
};

export type PageUpdateOneRequiredWithoutQuestionsNestedInput = {
  connect?: InputMaybe<PageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PageCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<PageCreateWithoutQuestionsInput>;
  update?: InputMaybe<PageUpdateWithoutQuestionsInput>;
  upsert?: InputMaybe<PageUpsertWithoutQuestionsInput>;
};

export type PageUpdateOneWithoutPredecessorNestedInput = {
  connect?: InputMaybe<PageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PageCreateOrConnectWithoutPredecessorInput>;
  create?: InputMaybe<PageCreateWithoutPredecessorInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<PageUpdateWithoutPredecessorInput>;
  upsert?: InputMaybe<PageUpsertWithoutPredecessorInput>;
};

export type PageUpdateOneWithoutSuccessorNestedInput = {
  connect?: InputMaybe<PageWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PageCreateOrConnectWithoutSuccessorInput>;
  create?: InputMaybe<PageCreateWithoutSuccessorInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<PageUpdateWithoutSuccessorInput>;
  upsert?: InputMaybe<PageUpsertWithoutSuccessorInput>;
};

export type PageUpdateWithWhereUniqueWithoutQuestionnaireInput = {
  data: PageUpdateWithoutQuestionnaireInput;
  where: PageWhereUniqueInput;
};

export type PageUpdateWithoutPredecessorInput = {
  questionnaire?: InputMaybe<QuestionnaireUpdateOneRequiredWithoutPagesNestedInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutPageNestedInput>;
  successor?: InputMaybe<PageUpdateOneWithoutPredecessorNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PageUpdateWithoutQuestionnaireInput = {
  predecessor?: InputMaybe<PageUpdateOneWithoutSuccessorNestedInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutPageNestedInput>;
  successor?: InputMaybe<PageUpdateOneWithoutPredecessorNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PageUpdateWithoutQuestionsInput = {
  predecessor?: InputMaybe<PageUpdateOneWithoutSuccessorNestedInput>;
  questionnaire?: InputMaybe<QuestionnaireUpdateOneRequiredWithoutPagesNestedInput>;
  successor?: InputMaybe<PageUpdateOneWithoutPredecessorNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PageUpdateWithoutSuccessorInput = {
  predecessor?: InputMaybe<PageUpdateOneWithoutSuccessorNestedInput>;
  questionnaire?: InputMaybe<QuestionnaireUpdateOneRequiredWithoutPagesNestedInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutPageNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type PageUpsertWithWhereUniqueWithoutQuestionnaireInput = {
  create: PageCreateWithoutQuestionnaireInput;
  update: PageUpdateWithoutQuestionnaireInput;
  where: PageWhereUniqueInput;
};

export type PageUpsertWithoutPredecessorInput = {
  create: PageCreateWithoutPredecessorInput;
  update: PageUpdateWithoutPredecessorInput;
};

export type PageUpsertWithoutQuestionsInput = {
  create: PageCreateWithoutQuestionsInput;
  update: PageUpdateWithoutQuestionsInput;
};

export type PageUpsertWithoutSuccessorInput = {
  create: PageCreateWithoutSuccessorInput;
  update: PageUpdateWithoutSuccessorInput;
};

export type PageWhereInput = {
  AND?: InputMaybe<Array<PageWhereInput>>;
  NOT?: InputMaybe<Array<PageWhereInput>>;
  OR?: InputMaybe<Array<PageWhereInput>>;
  id?: InputMaybe<IntFilter>;
  predecessor?: InputMaybe<PageRelationFilter>;
  predecessorId?: InputMaybe<IntNullableFilter>;
  questionnaire?: InputMaybe<QuestionnaireRelationFilter>;
  questionnaireId?: InputMaybe<IntFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
  successor?: InputMaybe<PageRelationFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  predecessorId?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateAnswer: AggregateAnswer;
  aggregatePage: AggregatePage;
  aggregateQuestion: AggregateQuestion;
  aggregateQuestionnaire: AggregateQuestionnaire;
  findFirstAnswer: Answer;
  findFirstPage: Page;
  findFirstQuestion: Question;
  findFirstQuestionnaire: Questionnaire;
  findManyAnswer: Array<Answer>;
  findManyPage: Array<Page>;
  findManyQuestion: Array<Question>;
  findManyQuestionnaire: Array<Questionnaire>;
  findUniqueAnswer: Answer;
  findUniquePage: Page;
  findUniqueQuestion: Question;
  findUniqueQuestionnaire: Questionnaire;
  groupByAnswer: Array<AnswerGroupBy>;
  groupByPage: Array<PageGroupBy>;
  groupByQuestion: Array<QuestionGroupBy>;
  groupByQuestionnaire: Array<QuestionnaireGroupBy>;
};


export type QueryAggregateAnswerArgs = {
  cursor?: InputMaybe<AnswerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AnswerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AnswerWhereInput>;
};


export type QueryAggregatePageArgs = {
  cursor?: InputMaybe<PageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryAggregateQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryAggregateQuestionnaireArgs = {
  cursor?: InputMaybe<QuestionnaireWhereUniqueInput>;
  orderBy?: InputMaybe<Array<QuestionnaireOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuestionnaireWhereInput>;
};


export type QueryFindFirstAnswerArgs = {
  cursor?: InputMaybe<AnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<AnswerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AnswerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AnswerWhereInput>;
};


export type QueryFindFirstPageArgs = {
  cursor?: InputMaybe<PageWhereUniqueInput>;
  distinct?: InputMaybe<Array<PageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryFindFirstQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryFindFirstQuestionnaireArgs = {
  cursor?: InputMaybe<QuestionnaireWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionnaireScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionnaireOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuestionnaireWhereInput>;
};


export type QueryFindManyAnswerArgs = {
  cursor?: InputMaybe<AnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<AnswerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AnswerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AnswerWhereInput>;
};


export type QueryFindManyPageArgs = {
  cursor?: InputMaybe<PageWhereUniqueInput>;
  distinct?: InputMaybe<Array<PageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryFindManyQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryFindManyQuestionnaireArgs = {
  cursor?: InputMaybe<QuestionnaireWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionnaireScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionnaireOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuestionnaireWhereInput>;
};


export type QueryFindUniqueAnswerArgs = {
  where: AnswerWhereUniqueInput;
};


export type QueryFindUniquePageArgs = {
  where: PageWhereUniqueInput;
};


export type QueryFindUniqueQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type QueryFindUniqueQuestionnaireArgs = {
  where: QuestionnaireWhereUniqueInput;
};


export type QueryGroupByAnswerArgs = {
  by: Array<AnswerScalarFieldEnum>;
  having?: InputMaybe<AnswerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AnswerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AnswerWhereInput>;
};


export type QueryGroupByPageArgs = {
  by: Array<PageScalarFieldEnum>;
  having?: InputMaybe<PageScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PageOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryGroupByQuestionArgs = {
  by: Array<QuestionScalarFieldEnum>;
  having?: InputMaybe<QuestionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryGroupByQuestionnaireArgs = {
  by: Array<QuestionnaireScalarFieldEnum>;
  having?: InputMaybe<QuestionnaireScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<QuestionnaireOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuestionnaireWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Question = {
  __typename?: 'Question';
  choices: Array<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  nextPageId?: Maybe<Scalars['Int']['output']>;
  pageId: Scalars['Int']['output'];
  text: Scalars['String']['output'];
  type: QuestionType;
};

export type QuestionAvgAggregate = {
  __typename?: 'QuestionAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  nextPageId?: Maybe<Scalars['Float']['output']>;
  pageId?: Maybe<Scalars['Float']['output']>;
};

export type QuestionAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nextPageId?: InputMaybe<SortOrder>;
  pageId?: InputMaybe<SortOrder>;
};

export type QuestionCountAggregate = {
  __typename?: 'QuestionCountAggregate';
  _all: Scalars['Int']['output'];
  choices: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  nextPageId: Scalars['Int']['output'];
  pageId: Scalars['Int']['output'];
  text: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
};

export type QuestionCountOrderByAggregateInput = {
  choices?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nextPageId?: InputMaybe<SortOrder>;
  pageId?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type QuestionCreateInput = {
  answer?: InputMaybe<AnswerCreateNestedOneWithoutQuestionInput>;
  choices?: InputMaybe<QuestionCreatechoicesInput>;
  nextPageId?: InputMaybe<Scalars['Int']['input']>;
  page: PageCreateNestedOneWithoutQuestionsInput;
  text: Scalars['String']['input'];
  type: QuestionType;
};

export type QuestionCreateManyInput = {
  choices?: InputMaybe<QuestionCreatechoicesInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  nextPageId?: InputMaybe<Scalars['Int']['input']>;
  pageId: Scalars['Int']['input'];
  text: Scalars['String']['input'];
  type: QuestionType;
};

export type QuestionCreateManyPageInput = {
  choices?: InputMaybe<QuestionCreatechoicesInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
  nextPageId?: InputMaybe<Scalars['Int']['input']>;
  text: Scalars['String']['input'];
  type: QuestionType;
};

export type QuestionCreateManyPageInputEnvelope = {
  data: Array<QuestionCreateManyPageInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuestionCreateNestedManyWithoutPageInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutPageInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutPageInput>>;
  createMany?: InputMaybe<QuestionCreateManyPageInputEnvelope>;
};

export type QuestionCreateNestedOneWithoutAnswerInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutAnswerInput>;
  create?: InputMaybe<QuestionCreateWithoutAnswerInput>;
};

export type QuestionCreateOrConnectWithoutAnswerInput = {
  create: QuestionCreateWithoutAnswerInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutPageInput = {
  create: QuestionCreateWithoutPageInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateWithoutAnswerInput = {
  choices?: InputMaybe<QuestionCreatechoicesInput>;
  nextPageId?: InputMaybe<Scalars['Int']['input']>;
  page: PageCreateNestedOneWithoutQuestionsInput;
  text: Scalars['String']['input'];
  type: QuestionType;
};

export type QuestionCreateWithoutPageInput = {
  answer?: InputMaybe<AnswerCreateNestedOneWithoutQuestionInput>;
  choices?: InputMaybe<QuestionCreatechoicesInput>;
  nextPageId?: InputMaybe<Scalars['Int']['input']>;
  text: Scalars['String']['input'];
  type: QuestionType;
};

export type QuestionCreatechoicesInput = {
  set: Array<Scalars['String']['input']>;
};

export type QuestionGroupBy = {
  __typename?: 'QuestionGroupBy';
  _avg?: Maybe<QuestionAvgAggregate>;
  _count?: Maybe<QuestionCountAggregate>;
  _max?: Maybe<QuestionMaxAggregate>;
  _min?: Maybe<QuestionMinAggregate>;
  _sum?: Maybe<QuestionSumAggregate>;
  choices?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['Int']['output'];
  nextPageId?: Maybe<Scalars['Int']['output']>;
  pageId: Scalars['Int']['output'];
  text: Scalars['String']['output'];
  type: QuestionType;
};

export type QuestionListRelationFilter = {
  every?: InputMaybe<QuestionWhereInput>;
  none?: InputMaybe<QuestionWhereInput>;
  some?: InputMaybe<QuestionWhereInput>;
};

export type QuestionMaxAggregate = {
  __typename?: 'QuestionMaxAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  nextPageId?: Maybe<Scalars['Int']['output']>;
  pageId?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<QuestionType>;
};

export type QuestionMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nextPageId?: InputMaybe<SortOrder>;
  pageId?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type QuestionMinAggregate = {
  __typename?: 'QuestionMinAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  nextPageId?: Maybe<Scalars['Int']['output']>;
  pageId?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  type?: Maybe<QuestionType>;
};

export type QuestionMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nextPageId?: InputMaybe<SortOrder>;
  pageId?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type QuestionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type QuestionOrderByWithAggregationInput = {
  _avg?: InputMaybe<QuestionAvgOrderByAggregateInput>;
  _count?: InputMaybe<QuestionCountOrderByAggregateInput>;
  _max?: InputMaybe<QuestionMaxOrderByAggregateInput>;
  _min?: InputMaybe<QuestionMinOrderByAggregateInput>;
  _sum?: InputMaybe<QuestionSumOrderByAggregateInput>;
  choices?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nextPageId?: InputMaybe<SortOrder>;
  pageId?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type QuestionOrderByWithRelationInput = {
  answer?: InputMaybe<AnswerOrderByWithRelationInput>;
  choices?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  nextPageId?: InputMaybe<SortOrder>;
  page?: InputMaybe<PageOrderByWithRelationInput>;
  pageId?: InputMaybe<SortOrder>;
  text?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type QuestionRelationFilter = {
  is?: InputMaybe<QuestionWhereInput>;
  isNot?: InputMaybe<QuestionWhereInput>;
};

export enum QuestionScalarFieldEnum {
  Choices = 'choices',
  Id = 'id',
  NextPageId = 'nextPageId',
  PageId = 'pageId',
  Text = 'text',
  Type = 'type'
}

export type QuestionScalarWhereInput = {
  AND?: InputMaybe<Array<QuestionScalarWhereInput>>;
  NOT?: InputMaybe<Array<QuestionScalarWhereInput>>;
  OR?: InputMaybe<Array<QuestionScalarWhereInput>>;
  choices?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<IntFilter>;
  nextPageId?: InputMaybe<IntNullableFilter>;
  pageId?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumQuestionTypeFilter>;
};

export type QuestionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<QuestionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<QuestionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<QuestionScalarWhereWithAggregatesInput>>;
  choices?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  nextPageId?: InputMaybe<IntNullableWithAggregatesFilter>;
  pageId?: InputMaybe<IntWithAggregatesFilter>;
  text?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<EnumQuestionTypeWithAggregatesFilter>;
};

export type QuestionSumAggregate = {
  __typename?: 'QuestionSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  nextPageId?: Maybe<Scalars['Int']['output']>;
  pageId?: Maybe<Scalars['Int']['output']>;
};

export type QuestionSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  nextPageId?: InputMaybe<SortOrder>;
  pageId?: InputMaybe<SortOrder>;
};

export enum QuestionType {
  MultipleChoice = 'MULTIPLE_CHOICE',
  SingleChoice = 'SINGLE_CHOICE',
  Text = 'TEXT'
}

export type QuestionUpdateInput = {
  answer?: InputMaybe<AnswerUpdateOneWithoutQuestionNestedInput>;
  choices?: InputMaybe<QuestionUpdatechoicesInput>;
  nextPageId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  page?: InputMaybe<PageUpdateOneRequiredWithoutQuestionsNestedInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyMutationInput = {
  choices?: InputMaybe<QuestionUpdatechoicesInput>;
  nextPageId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyWithWhereWithoutPageInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithoutPageNestedInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutPageInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutPageInput>>;
  createMany?: InputMaybe<QuestionCreateManyPageInputEnvelope>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutPageInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutPageInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutPageInput>>;
};

export type QuestionUpdateOneRequiredWithoutAnswerNestedInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutAnswerInput>;
  create?: InputMaybe<QuestionCreateWithoutAnswerInput>;
  update?: InputMaybe<QuestionUpdateWithoutAnswerInput>;
  upsert?: InputMaybe<QuestionUpsertWithoutAnswerInput>;
};

export type QuestionUpdateWithWhereUniqueWithoutPageInput = {
  data: QuestionUpdateWithoutPageInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithoutAnswerInput = {
  choices?: InputMaybe<QuestionUpdatechoicesInput>;
  nextPageId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  page?: InputMaybe<PageUpdateOneRequiredWithoutQuestionsNestedInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutPageInput = {
  answer?: InputMaybe<AnswerUpdateOneWithoutQuestionNestedInput>;
  choices?: InputMaybe<QuestionUpdatechoicesInput>;
  nextPageId?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  text?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumQuestionTypeFieldUpdateOperationsInput>;
};

export type QuestionUpdatechoicesInput = {
  push?: InputMaybe<Array<Scalars['String']['input']>>;
  set?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type QuestionUpsertWithWhereUniqueWithoutPageInput = {
  create: QuestionCreateWithoutPageInput;
  update: QuestionUpdateWithoutPageInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithoutAnswerInput = {
  create: QuestionCreateWithoutAnswerInput;
  update: QuestionUpdateWithoutAnswerInput;
};

export type QuestionWhereInput = {
  AND?: InputMaybe<Array<QuestionWhereInput>>;
  NOT?: InputMaybe<Array<QuestionWhereInput>>;
  OR?: InputMaybe<Array<QuestionWhereInput>>;
  answer?: InputMaybe<AnswerRelationFilter>;
  choices?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<IntFilter>;
  nextPageId?: InputMaybe<IntNullableFilter>;
  page?: InputMaybe<PageRelationFilter>;
  pageId?: InputMaybe<IntFilter>;
  text?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumQuestionTypeFilter>;
};

export type QuestionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Questionnaire = {
  __typename?: 'Questionnaire';
  _count?: Maybe<QuestionnaireCount>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type QuestionnaireAvgAggregate = {
  __typename?: 'QuestionnaireAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type QuestionnaireAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type QuestionnaireCount = {
  __typename?: 'QuestionnaireCount';
  pages: Scalars['Int']['output'];
};

export type QuestionnaireCountAggregate = {
  __typename?: 'QuestionnaireCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
};

export type QuestionnaireCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type QuestionnaireCreateInput = {
  name: Scalars['String']['input'];
  pages?: InputMaybe<PageCreateNestedManyWithoutQuestionnaireInput>;
};

export type QuestionnaireCreateManyInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type QuestionnaireCreateNestedOneWithoutPagesInput = {
  connect?: InputMaybe<QuestionnaireWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionnaireCreateOrConnectWithoutPagesInput>;
  create?: InputMaybe<QuestionnaireCreateWithoutPagesInput>;
};

export type QuestionnaireCreateOrConnectWithoutPagesInput = {
  create: QuestionnaireCreateWithoutPagesInput;
  where: QuestionnaireWhereUniqueInput;
};

export type QuestionnaireCreateWithoutPagesInput = {
  name: Scalars['String']['input'];
};

export type QuestionnaireGroupBy = {
  __typename?: 'QuestionnaireGroupBy';
  _avg?: Maybe<QuestionnaireAvgAggregate>;
  _count?: Maybe<QuestionnaireCountAggregate>;
  _max?: Maybe<QuestionnaireMaxAggregate>;
  _min?: Maybe<QuestionnaireMinAggregate>;
  _sum?: Maybe<QuestionnaireSumAggregate>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type QuestionnaireMaxAggregate = {
  __typename?: 'QuestionnaireMaxAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type QuestionnaireMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type QuestionnaireMinAggregate = {
  __typename?: 'QuestionnaireMinAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type QuestionnaireMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type QuestionnaireOrderByWithAggregationInput = {
  _avg?: InputMaybe<QuestionnaireAvgOrderByAggregateInput>;
  _count?: InputMaybe<QuestionnaireCountOrderByAggregateInput>;
  _max?: InputMaybe<QuestionnaireMaxOrderByAggregateInput>;
  _min?: InputMaybe<QuestionnaireMinOrderByAggregateInput>;
  _sum?: InputMaybe<QuestionnaireSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type QuestionnaireOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pages?: InputMaybe<PageOrderByRelationAggregateInput>;
};

export type QuestionnaireRelationFilter = {
  is?: InputMaybe<QuestionnaireWhereInput>;
  isNot?: InputMaybe<QuestionnaireWhereInput>;
};

export enum QuestionnaireScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type QuestionnaireScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<QuestionnaireScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<QuestionnaireScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<QuestionnaireScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type QuestionnaireSumAggregate = {
  __typename?: 'QuestionnaireSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type QuestionnaireSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type QuestionnaireUpdateInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  pages?: InputMaybe<PageUpdateManyWithoutQuestionnaireNestedInput>;
};

export type QuestionnaireUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type QuestionnaireUpdateOneRequiredWithoutPagesNestedInput = {
  connect?: InputMaybe<QuestionnaireWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionnaireCreateOrConnectWithoutPagesInput>;
  create?: InputMaybe<QuestionnaireCreateWithoutPagesInput>;
  update?: InputMaybe<QuestionnaireUpdateWithoutPagesInput>;
  upsert?: InputMaybe<QuestionnaireUpsertWithoutPagesInput>;
};

export type QuestionnaireUpdateWithoutPagesInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type QuestionnaireUpsertWithoutPagesInput = {
  create: QuestionnaireCreateWithoutPagesInput;
  update: QuestionnaireUpdateWithoutPagesInput;
};

export type QuestionnaireWhereInput = {
  AND?: InputMaybe<Array<QuestionnaireWhereInput>>;
  NOT?: InputMaybe<Array<QuestionnaireWhereInput>>;
  OR?: InputMaybe<Array<QuestionnaireWhereInput>>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  pages?: InputMaybe<PageListRelationFilter>;
};

export type QuestionnaireWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};
