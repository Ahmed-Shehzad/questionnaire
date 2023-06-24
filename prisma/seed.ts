import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const seedQuestionnaire = await prisma.questionnaire.create({
    data: {
      name: 'Foxbase Questionnaire',
    },
  });
  const seedPage = await prisma.page.create({
    data: {
      questionnaireId: seedQuestionnaire.id,
      title: 'Questionnaire',
    },
  });
  const seedQuestion = await prisma.question.create({
    data: {
      pageId: seedPage.id,
      text: 'Which programming languages do you know?',
      type: 'MULTIPLE_CHOICE',
      choices: ['C#', 'Python', 'Java', 'JavaScript'],
    },
  });
  await prisma.answer.create({
    data: {
      questionId: seedQuestion.id,
      answers: ['C#', 'Python'],
    },
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
